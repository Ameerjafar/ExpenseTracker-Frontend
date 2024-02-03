import { useEffect, useState } from "react"

export function Logic() {
    const [children, setChildren] = useState([]);
    const [name, setName] = useState(0);
    const [cost, setCost] = useState("0");
    const [budget, setBudget] = useState("1000");
    const [spentSoFar, setSpentSoFor] = useState(0);
    const [remaining, setRemaining] = useState(budget);
    useEffect(() => {
        const spent = () => {
            setSpentSoFor(String(parseInt(cost) + parseInt(spentSoFar)));
        }
        const remain = () => {
            setRemaining(String(parseInt(budget) - parseInt(spentSoFar)));
        }
        spent();
        remain();
    }, [children]);
    return (
        <div className = 'h-screen'>
            <h1 className = "text-3xl font-bold p-10">
                My Budget Planner
            </h1>
            <div className = 'md:grid grid-cols-3 gap-3 p-10'>
                <div className="flex justify-between bg-gray-200 h-16 p-3 rounded-lg h-100">
                    <div>Budget:{budget}</div>
                    <div className = 'bg-blue-500 w-20 text-center rounded-lg h-7'>
                        <button>Edit</button>
                    </div>
                </div>
                <div className = 'bg-green-300 p-3 rounded-lg'>Remaining: {remaining}</div>
                <div className = "bg-blue-300 p-3 rounded-lg">spent so far: {spentSoFar}</div>
            </div>
            <div className = 'text-2xl font-bold p-10 pb-0'>EXPENSES</div>
            <div className = 'p-10 pt-0'>
                <input className = 'border rounded pl-2 pb-2 pt-2 w-full' type = "text" placeholder="Type to search..."></input>
            </div>
            <div>{children}</div>
            <div className = 'text-2xl font-bold p-10 pt-0'>ADD EXPENSES</div>
            <div className = 'grid grid-cols-3 pl-10'>
                <div>Name</div>
                <div>Cost</div>
            </div>
            <div className = 'grid grid-cols-3 gap-3 pl-10'>
                <input onChange={(events) => {
                    setName(events.target.value);
                }} className = 'border rounded ' type = 'text'></input>
                <input onChange = {(events) => {
                    setCost(events.target.value);
                }} className = 'border rounded' type = 'text'></input>
            </div>
            <div className = 'p-10'>
                <div className = 'bg-blue-500 w-20 text-center rounded-lg h-7'>
                    <button onClick = {() => {
                    const newDiv = <div key = {children.length} className = 'flex p-10 pb-0 pt-0'>
                                        <div className = 'flex justify-between border rounded pl-2 pb-2 pt-2 p-10 w-full'>
                                            <div className = 'w-4/5'>{name}</div>
                                            <div className = 'bg-blue-400 rounded-lg p-1 text-center'>{cost}</div>
                                            <button>X</button>
                                        </div>
                                    </div>
                    setChildren((prevChildren) => [...prevChildren, newDiv]);
                    console.log(children);
                    }}>save</button>
                </div>
            </div>
            
        </div>
    )
}
