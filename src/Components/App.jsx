import Profile from "./Profile/Profile";
import userData from "../userData.json";
import friends from "../friends.json";
import FriendList from "./FriendList/FriendList";
import transactions from "../transactions.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

export default function App() {
  return (
    <div>
      <h2>Завдання 1 - Профіль соціальної мережі</h2>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <h2>Завдання 2 - Список друзів</h2>
      <FriendList frinends={friends} />
      <h2>Завдання 3 - Історія транзакцій</h2>
      <TransactionHistory items={transactions} />
    </div>
  );
}
