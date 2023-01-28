# Introduction To GraphQL For Data Scientists

![](img/graphql.png)


## Part 1: Introduction To GraphQL

![](img/playground.png)

  * [GraphQL overview slides]()

Try these queries in GraphQL Playground [movies.neo4j-graphql.com](https://movies.neo4j-graphql.com)

```GraphQL
{
  movies(options: { limit: 10, sort: { title: ASC } }) {
    title
  }
}
```

Who acted in the movie "Jurassic Park"?

```GraphQL
{
  movies(where: { title: "Jurassic Park" }) {
    title
    actors {
      name
    }
  }
}
```


What are the genres of "Jurassic Park"? 

```GraphQL
{
  movies(where: { title: "Jurassic Park" }) {
    title
    genres {
      name
    }
  }
}
```

Can you write GraphQL queries to answer the following questions?

* What other movies are in those genres?
* What movie has the highest `imdbRating`?

See [this readme](https://github.com/johnymontana/fullstack-graphql-book/blob/main/exercises/chapter1/solutions.md) for more exercises and solutions.

## Part 2: GraphQL As A Data Source

![](img/jupyter1.png)

  * Querying GraphQL in Python using the GQL package - Meetup API
  * Working with GraphQL in a DataFrame
  * Graph Data Science with Neo4j

[notebooks/meetup.ipynb](notebooks/meetup.ipynb)

## Part 3: Exposing Data Science With GraphQL

![](https://dist.neo4j.com/wp-content/uploads/20210423155831/graphql-diagram.svg)

  * Using the Neo4j GraphQL Library to expose the results of data science workflows (operationalize data science activities)

See [graphql/](graphql/) or [Open in CodeSandbox](https://codesandbox.io/s/github/johnymontana/graphql-for-data-scientists/tree/main/graphql)

## Part 4: GraphQL Data Visualization

![](img/bloom1.png)

  * Neo4j Bloom
  * Using react-graph-viz-engine with GraphQL
