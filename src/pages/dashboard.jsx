
import Overview from "../component/overview"
import RecentTransactions from "../component/recent-transactions"
function Dashboard(){
    return(
        <>
        <div className="pt-20 px-10 flex flex-col gap-10">
        <h2 className="text-5xl font-semibold">Welcome, Samuel!</h2>
        <Overview />
        <RecentTransactions />
        </div>
        </>
    )
}

export default Dashboard