/**
 *                                              (B)
 *       A----> B                               / \
 *       B----> A,C                            /   \
 *       C---->B                              /     \
 *                                          (A)     (C)
 */

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set(); // []
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }

    this.adjacencyList[vertex1].add(vertex2); //add is Set,
    this.adjacencyList[vertex2].add(vertex1); // as it is a undirected list
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + "------>" + [...this.adjacencyList[vertex]]);
    }
  }

  hasEdges(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    } else {
      for (let adjacentVertex of this.adjacencyList[vertex]) {
        this.removeEdge(vertex, adjacentVertex);
      }
    }

    delete this.adjacencyList[vertex];
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
