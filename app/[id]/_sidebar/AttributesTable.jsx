function AttributesTable({ attributions }) {
    return (
        <table className="mt-5 attr-table w-full">
            <tbody>
                <tr>
                    <td>Publisher</td>
                    <td>{attributions.publisherAttribution}</td>
                </tr>
                <tr>
                    <td>Developer</td>
                    <td>{attributions.developerAttribution}</td>
                </tr>
                <tr>
                    <td>Refund Type</td>
                    <td>Self-Refundable</td>
                </tr>
            </tbody>
        </table>
    );
}

export default AttributesTable;
