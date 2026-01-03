import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card
        logo="https://tse1.mm.bing.net/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?pid=Api&P=0&h=220"
        title="Amazon"
        time="5 days ago"
        role="Senior UI/UX Designer"
        tag1="Part-Time"
        tag2="Senior Level"
        rate="$120/hr"
        place="Mumbai, India"
      />
      <Card
        logo="https://static.dezeen.com/uploads/2025/05/sq-google-g-logo-update_dezeen_2364_col_0.jpg"
        title="Google"
        time="30 days ago"
        role="Graphics Designer"
        tag1="Part-Time"
        tag2="Flexible Schedule"
        rate="$150-220k"
        place="Kochi, India"
      />
      <Card
        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-zdLpQ1XogOHnpR9MuW1MD9oXYxuPS5FCgQ&s"
        title="Dribble"
        time="18 days ago"
        role="Senior Motion Designer"
        tag1="Contract"
        tag2="Remote"
        rate="$85/hr"
        place="Chennai, India"
      />
      <Card
        logo="https://cdn.prod.website-files.com/5f15081919fdf673994ab5fd/63feaf1bf551685b4ac7dd7b_Fima%20Logo.svg"
        title="Figma"
        time="5 days ago"
        role="UX Designer"
        tag1="Full-Time"
        tag2="In office"
        rate="$200-250K"
        place="Banglore, India"
      />
      <Card
        logo="https://animationvisarts.com/wp-content/uploads/2022/01/Airbnb-Icon-180x180.jpg"
        title="Airbnb"
        time="5 days ago"
        role="Junior UI/UX Designer"
        tag1="Contract"
        tag2="Remote"
        rate="$100/hr"
        place="Delhi, India"
      />
      <Card
        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRzvZuz2fQpoXUDN48B2o3oxK8fye5h4d3sQ&s"
        title="Apple"
        time="5 days ago"
        role="Graphic Designer"
        tag1="Full-Time"
        tag2="Flexible Schedule"
        rate="$85-120k"
        place="Kerela, India"
      />
    </div>
  );
};

export default App;
