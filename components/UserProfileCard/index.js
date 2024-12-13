export default function UserProfileCard({ userInformation }) {
  return (
    <div>
      <h1> User Profile</h1>
      <p>Email: {userInformation?.email}</p>
    </div>
  );
}