import { Link } from "react-router-dom";

function Dashboard() {
const dashboardItems = [
    {id:1,title:"My Profile"},
    {id:2,title:"My Projects"},
    {id:3,title:"My Teams"},
];
  return (
    <div>
      <p>Dynamic Routes Implementation</p>
      <ul>
        {dashboardItems.map((item) =>(
            <li key={item.id}>
                <Link to={'/Dashboard/${item.id}'}>
                <h2>{item.title}</h2>
                </Link>
            </li>
        ))}
        
      </ul>
    </div>
  );
}
export default Dashboard;