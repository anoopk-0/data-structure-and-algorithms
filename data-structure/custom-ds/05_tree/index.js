/**
 * TOPIC:Tree
 *
 * A tree is a hierarchical data structure that consists of nodes connected by edges.
 * A tree is a non-linear data structure, compare to a array, linkedList, stacks and queues which are linear data structure.
 * In linear data structure, the time required to search is proportional to the size of the data set.
 * Trees however, owing to the nonlinear nature allow quicker and easier access to the data.
 * A tree will not contain any loops or cycles.
 *
 * Usages:
 *  - file systems
 *  - family tree
 *  - DOM
 *  - chat bots
 *  - The organizational tree
 *
 *
 *
 * Tree Terminology
 *
 *                      (A) [root node]
 *                      /
 *                     /
 *                    /
 *                  (B) [child node]
 *
 *
 *  leaf node: node which don't have any child node
 *  siblings: node with same parents are called siblings
 *  path: sequence of node to reach the node
 *
 *
 *  Property:
 *  Degree: node of nodes branches it have.
 *
 *
 *  Tree Traversal:
 *  visiting every node in the tree.
 *  A hierarchical data structure like a tree can be traversed in different ways
 *      1. depth fist search
 *      2. breath first search
 *
 *
 *  DFS
 *  The DFS algo starts at the root node and explores as far as possible along each branch before backtracking
 *  visit the root node, visit all the nodes in the left subtree and visit all the nodes in the right sub tress
 *  Depending on the order of search, there are 3 types of DFS travels
 *      1. preOrder
 *      2. inOrder
 *      3. postOrder
 *
 *  preOrder:
 *          - read the data of the node
 *          - visit the left subtree
 *          - visit the right subtree
 *
 *  inOrder:
 *          - visit the left subtree
 *          - read the data of the node
 *          - visit the right subtree
 *
 *  postOrder:
 *          - visit the left subtree
 *          - visit the right subtree
 *          - read the data of the node
 *
 *
 *
 * BFS:
 *  Explore all nodes at the present depth prior to moving on to the nodes at the next depth level.
 *
 *   BFS traversal approach
 *      1. create a queue
 *      2. enqueue the root node
 *      3. As long as a node exists in the queue
 *              a. Dequeue the node from the front
 *              b. read the node's value
 *              c. enqueue the node's left child if it exist
 *              d. enqueue the node's right child if it exist
 *
 *
 */
