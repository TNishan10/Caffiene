function StatCard(props){
    const {lg, title, children} = props;

    return(
        <div className={"card stat-card " + (lg ? ' col-span-2 ': '')}>

        </div>
    )

}


export default function Stats() {
    return (
        <>
        <div className="section-header">
            <i className="fa-solid fa-chart-simple"></i>
            <h2>Stats</h2>
        </div>
        <div className="stats-grid">
            <StatCard lg title="Active Caffiene level"></StatCard>
            <StatCard title="Daily Caffiene"></StatCard>
            <StatCard title="Avg # of Coffees"></StatCard>
            <StatCard title="Daily Cost ($)"></StatCard>
            <StatCard title="Total Cost ($)"></StatCard>
        </div>

        </>
    )
}