import "./App.css";
import Card from "./components/Card";
import Sdata from "./Sdata";

function App() {
  // console.log(Sdata[0]);
  return (
    <>
      <h1 className="heading_style">List of top 5 Netflix Series in 2021</h1>
      {Sdata.map((value, index) => {
        return (
          <Card
            key={index}
            imgsrc={value.imgsrc}
            title={value.title}
            sname={value.sname}
            link={value.link}
          />
        );
      })}
      ;
    </>
  );
}

export default App;
