import GraphVisualization from "react-graph-viz-engine";

function App() {
  return (
      <GraphVisualization
        graphqlQuery="{
          groups {
            name
            __typename
            topics {
              __typename
              name
            }
          }
        }"
        graphqlUrl={process.env.REACT_APP_GRAPHQL_URI}
        layout="graph"
        renderer="react-force-graph"
        showNavigator
        style={{
          nodeCaption: {
            Group: "name",
            Topic: "name",
          },
          nodeCaptionSize: {
            Group: 15,
            Topic: 15,
          },
          nodeColor: {
            Group: "blue",
            Topic: "green",
          },
          nodeSize: {
            Group: 20,
            Topic: 30,
          },
        }}
      />
  );
}

export default App;
