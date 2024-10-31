
import Overview from "../component/overview"
import RecentTransactions from "../component/recent-transactions"
import BudgetTracking from "../component/budget-tracking"
import SpendingTrends from "../component/spending-trends"
import MonthlySummary from "../component/monthly-summary"
function Dashboard(){
    return(
        <>
        <div className="pt-20 px-10 flex flex-col gap-10">
        <h2 className="text-5xl font-semibold">Welcome, Samuel!</h2>
        <Overview />
        <div className="flex flex-around"> 
        <RecentTransactions />
        <BudgetTracking />
        <SpendingTrends />
        </div>
        <MonthlySummary />
        </div>
        </>
    )
}

export default Dashboard