import FormGroup from "@site/src/components/ui/FormGroup";
import Layout from "@theme/Layout";
import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import styles from "./styles.module.css";
import { FaX } from "react-icons/fa6";
import clsx from "clsx";

export default function CourtSearchPage() {
    const [searchType, setSearchType] = useState("magistrates-hearings");

    return (
        <Layout title="Court Search">
            <div className={styles.header}>
                <div className={"container container-fluid margin-vert--lg"}>
                    <h1 className={styles.title}>Court Search</h1>
                    <p className={styles.summary}>
                        Search through Magistrates & Petty Debts hearings & results!
                    </p>
                </div>
            </div>
            <div className={styles.content}>
                <div className={"container container-fluid margin-vert--lg"}>
                    <div className={styles.searchTypeWrapper}>
                        <SearchTypeItem
                            title="Magistrates Hearings"
                            active={searchType === "magistrates-hearings"}
                            onClick={() => setSearchType("magistrates-hearings")}
                        />
                        <SearchTypeItem
                            title="Magistrates Results"
                            active={searchType === "magistrates-results"}
                            onClick={() => setSearchType("magistrates-results")}
                        />
                        <SearchTypeItem
                            title="Petty Debts Hearings"
                            active={searchType === "petty-debts-hearings"}
                            onClick={() => setSearchType("petty-debts-hearings")}
                        />
                        <SearchTypeItem
                            title="Petty Debts Results"
                            active={searchType === "petty-debts-results"}
                            onClick={() => setSearchType("petty-debts-results")}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

interface SearchTypeItemProps {
    title: string;
    active: boolean;
    onClick: () => void;
}

// +--------------------------------------------------------------+
// | 🔍 Search Panel (left) | 📊 Results Table (right)             |
// |                        |                                     |
// | [ Global Defendant  ]  |  ┌──────────────────────────────┐   |
// | [ Type Selector     ]  |  |   Results Table              |   |
// |                        |  |   (based on search)          |   |
// | [ Dynamic Filters   ]  |  └──────────────────────────────┘   |
// | [ Search Button     ]  |                                     |
// | [ Clear Filters     ]  |                                     |
// +--------------------------------------------------------------+

function SearchTypeItem({ title, active, onClick }: SearchTypeItemProps) {
    return (
        <div
            className={clsx(styles.searchType, active ? styles.searchTypeActive : "")}
            onClick={onClick}
        >
            {title}
        </div>
    )
}

export function CourtSearchPageOld(): JSX.Element {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const [defendant, setDefendant] = useState("");

    const [jumpToPage, setJumpToPage] = useState("");
    const [jumpToPageError, setJumpToPageError] = useState("");

    const [results, setResults] = useState<any[]>([]);
    const [totalResults, setTotalResults] = useState("");
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        searchRequests();
    }, [page, limit]);

    async function fetchAuthors() {
        try {
            setError("");
            const response = await fetch(`https://api.opendata.je/v1/foi-requests/authors`);
            const data = await response.json();

            if (response.ok) {
                setAllAuthors(data?.results ?? []);
            } else {
                setError(data?.message || "Failed to load authors");
            }
        } catch (e: any) {
            setError("Failed to load authors");
            console.error(e);
        }
    }

    async function searchRequests() {
        try {
            setError("");
            setLoading(true);
            setPage(1);

            const query = buildQueryParams();
            const url = `https://api.opendata.je/v1/courts/magistrates/hearings${query ? `?${query}` : ""}`;

            const response = await fetch(url);
            const data = await response.json();

            if (response.ok) {
                setResults(data?.results);
                setTotalResults(data?.pagination?.totalItems);
                setTotalPages(data?.pagination?.totalPages ?? 1);
            } else {
                setError(data?.message || "Failed to search FOI requests");
            }
        } catch (e: any) {
            setError("Failed to search FOI requests");
            console.error(e);
        }
        setLoading(false);
    }


    function buildQueryParams() {
        const params = new URLSearchParams();

        params.append("limit", limit.toString());

        if (defendant) params.append("defendant", defendant);

        return params.toString();
    }

    function handleJumpToPage(e) {
        const value = e.target.value;

        setJumpToPage(value);

        if (value === "") {
            setJumpToPageError("");
            return;
        }

        if (/^[0-9]+$/.test(value) && Number.isInteger(Number(value))) {
            setJumpToPageError("");
        } else {
            setJumpToPageError("Not a number");
        }
    }

    function jumpToPageGo() {
        if (jumpToPage === "") {
            return;
        }
        if (Number(jumpToPage) > Number(totalPages)) {
            setJumpToPageError("Not a page");
            return;
        }
        setPage(Number(jumpToPage));
        setJumpToPage("");
    }

    return (
        <Layout title="FOI Search">
            <div className={styles.header}>
                <div className={"container container-fluid margin-vert--lg"}>
                    <h1 className={styles.title}>FOI Search</h1>
                    <p className={styles.summary}>
                        Search through Freedom of Information requests.
                    </p>
                </div>
            </div>
            <div className={styles.content}>
                <div className={"container container-fluid margin-vert--lg"}>
                    <div className={styles.grid}>
                        <div className={styles.inputColumn}>
                            {error && (
                                <div className={styles.error}>
                                    <FaExclamationCircle /> {error}
                                </div>
                            )}

                            <FormGroup label="Defendant">
                                <input
                                    type="text"
                                    value={defendant}
                                    placeholder=""
                                    onChange={(e) => setDefendant(e.target.value)}
                                />
                            </FormGroup>

                            <br />

                            <button
                                className="btn btn-primary"
                                onClick={() => searchRequests()}
                            >
                                Search
                            </button>
                        </div>
                        <div className={styles.outputColumn}>
                            <h2>Search Results</h2>

                            {results.length !== 0 && (
                                <p>Showing {results.length} of {totalResults} results</p>
                            )}

                            <div className={styles.results}>
                                {results.map(request => (
                                    <div
                                        key={request.id}
                                        className={styles.request}
                                    >
                                        <pre>{JSON.stringify(request, null, 2)}</pre>
                                    </div>
                                ))}
                                {totalPages > 1 && (
                                    <>
                                        <div className={styles.pagination}>
                                            <button
                                                className="btn"
                                                disabled={page === 1}
                                                onClick={() => setPage(p => p - 1)}
                                            >
                                                Previous
                                            </button>

                                            <span className={styles.pageInfo}>
                                                Page {page} of {totalPages}
                                            </span>

                                            <button
                                                className="btn"
                                                disabled={page === totalPages}
                                                onClick={() => setPage(p => p + 1)}
                                            >
                                                Next
                                            </button>
                                        </div>
                                        <div className={styles.jumpToPage}>
                                            <span>Jump to page</span>
                                            <input
                                                type="number"
                                                value={jumpToPage}
                                                onChange={handleJumpToPage}
                                            />
                                            <button
                                                className="btn"
                                                disabled={jumpToPage === ""}
                                                onClick={() => jumpToPageGo()}
                                            >
                                                Go
                                            </button>
                                        </div>
                                        {jumpToPageError && <div className={styles.jumpToPageError}>{jumpToPageError}</div>}
                                    </>
                                )}
                                <div>
                                    <span style={{ marginRight: "6px" }}>Items per page:</span>

                                    <select
                                        value={limit}
                                        onChange={(e) => setLimit(Number(e.target.value))}
                                    >
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="15">15</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                        <option value="40">40</option>
                                        <option value="50">50</option>
                                        <option value="60">60</option>
                                        <option value="70">70</option>
                                        <option value="80">80</option>
                                        <option value="90">90</option>
                                        <option value="100">100</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={styles.disclaimer}>
                <div className={"container container-fluid margin-vert--lg"}>
                    To access this data programatically, please see <a href="/docs/endpoints/foi-requests/search">the documentation</a>.
                </div>
            </div> */}
        </Layout>
    )
}