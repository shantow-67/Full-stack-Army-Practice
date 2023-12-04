import HistoryItem from "./HistoryItem";

/* eslint-disable react/prop-types */
function HistorySection({ histories, handleRestore, restoreItem }) {
    return (
        <div className="hitory">
            <h2>History</h2>
            <br />
            <div>
                {histories.length === 0 ? (
                    <p>There is no history</p>
                ) : (
                    <ul>
                        {histories.map(history => (
                            <HistoryItem
                                key={history.id}
                                history={history}
                                handleRestore={handleRestore}
                                disabled={restoreItem === history.id}
                            />
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default HistorySection;
