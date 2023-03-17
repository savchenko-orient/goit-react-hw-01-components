import user from 'data/user.json'
import data from 'data/data.json'
import friends from 'data/friends.json'
import transaktions from 'data/transactions.json'
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from './Friends/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

function App() {
  return <div className="App">
    <Profile username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title='Title' data={data} />
    <FriendList data={friends} />
    <TransactionHistory items={transaktions} />
  </div>;
}

export default App;
