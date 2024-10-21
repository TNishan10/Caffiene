function StatCard(props){
    const {lg, title, children} = props;

    return(
        <div className={"card stat-card " + (lg ? ' col-span-2 ': '')}>
            <h4>{title}</h4>
            {children}
        </div>
    )

}


export default function Stats() {
    const stats = {
        daily_caffiene : 240,
        daily_cost : 2.40,
        average_coffee : 2,
        total_cost : 100
    }
    
    return (
        <>
        <div className="section-header">
            <i className="fa-solid fa-chart-simple"></i>
            <h2>Stats</h2>
        </div>
        <div className="stats-grid">
            <StatCard lg title="Active Caffiene level"></StatCard>
                <div className="status">
                    <p><span></span></p>
                </div>
            <StatCard title="Total Caffiene"></StatCard>
            <StatCard title="Daily Caffiene"></StatCard>
            <StatCard title="Avg # of Coffees"></StatCard>
            <StatCard title="Daily Cost ($)"></StatCard>
            <StatCard title="Total Cost ($)"></StatCard>
        </div>

        </>
    )
}