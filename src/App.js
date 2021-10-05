import Expenses from "./components/Expenses";
const expensesData = [
	{
		id: "e1",
		title: "Toilet Paper",
		amount: 94.12,
		date: new Date("2021-10-03T23:13:44.514Z"),
	},
	{
		id: "e2",
		title: "New TV LED",
		amount: 799.49,
		date: new Date("2015-08-14T23:13:44.514Z"),
	},
	{
		id: "e3",
		title: "Car Insurance",
		amount: 294.67,
		date: new Date("2010-08-11T23:13:44.514Z"),
	},
	{
		id: "e4",
		title: "New Desk (Wooden)",
		amount: 450,
		date: new Date("2020-08-19T23:13:44.514Z"),
	},
	{
		id: "e5",
		title: "Nissan GT-R BNR34",
		amount: 380000,
		date: new Date("1999-07-13T23:23:44.514Z"),
	},
];
function App() {
	return (
		<div>
			<h2>Let's get started!</h2>
			<Expenses expensesData={expensesData} />
		</div>
	);
}

export default App;
