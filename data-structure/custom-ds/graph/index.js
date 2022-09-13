/**
 * #Graph
 *
 * A graph is a non-linear data structure that consists of a finite number of vertices(also called nodes) connected by edges.
 * Trees are a specific type of graph data structure.
 *
 * Types of Graph
 *  1. directed
 *         - A graph in which the edges have a direction.
 *         - Edges are usually represented by arrows pointing in the direction the graph can be traversed.
 *
 *  2. undirected
 *         - A graph in which the edges are bidirectional
 *         - The graph can be traversed in either direction
 *         - The absence of an arrow tells us that the graph is undirected
 *
 * Usages
 *  1. Google map
 *  2. social media sites
 *
 * Graph representation
 *  - Adjacency matrix:
 *             => An Adjacency matrix is a 2D array of size V x V where V is the number of vertices in the graph.
 *             => Each row and column represent a vertex
 *             => If the value of any element say, matrix[i][j] is 1, it represent that there is an edge connecting vertex i and vertex j
 *
 *  - Adjacency list
 *              => Vertices are stored in a map like data structure, and every vertex stores a list of its adjacent vertices.
 *
 *  Adjacency matrix vs Adjacency list
 *  - with an adjacency list, we only need to store the values for the edges that exist. with adjacency matrix, you store values irrespective of weather an edge exists or not. storage wise, an adjacency list is more efficient.
 *
 * - with adjacency list, inserting and finding adjacent nodes is constant time complexity whereas with adjacency matrix, it is linear time complexity.
 *
 * - an adjacency list, allow us to store additional values with an edges such as weight of the edges. with adjacency matrix, such information would have to be stored externally.
 */
