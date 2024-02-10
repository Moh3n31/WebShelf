#include <iostream>
#include <vector>

// Class for a graph
// کلاس برای گراف
class Graph 
{
private:
    int V; // تعداد رئوس - Number of vertices
    std::vector<std::vector<int>> adj; // لیست مجاورت - Adjacency list

public:
    // Constructor - سازنده
    Graph(int v) : V(v), adj(v, std::vector<int>(v, 0)) {}

    // Function to set the adjacency matrix
    // تابع برای تنظیم ماتریس مجاورت
    void setAdjacencyMatrix(std::vector<std::vector<int>>& matrix) 
    {
        if (matrix.size() == V && matrix[0].size() == V) 
        {
            adj = matrix;
        }
        else
        {
            std::cout << "Invalid matrix dimensions!" << std::endl;
        }
    }

    // Depth-First Search (DFS) to find connected components
    // DFS برای پیدا کردن اجزا متصل
    void dfs(int v, std::vector<bool>& visited) 
    {
        visited[v] = true;
        std::cout << v << " ";

        for (int u = 0; u < V; u++) 
        {
            // Check if there is an edge and the vertex is not visited
            // بررسی کنید که یک یال وجود دارد و راس تا کنون بازدید نشده است
            if (adj[v][u] && !visited[u]) 
            {
                dfs(u, visited);
            }
        }
    }

    // Function to find connected components of a graph
    // تابع پیدا کردن اجزا متصل یک گراف
    void findConnectedComponents() 
    {
        std::vector<bool> visited(V, false);

        for (int v = 0; v < V; v++) 
        {
            if (!visited[v]) 
            {
                std::cout << "Component: ";
                // Find connected components and print them
                // اجزای متصل را پیدا می‌کنیم و چاپ می‌کنیم
                dfs(v, visited);
                std::cout << std::endl;
            }
        }
    }
};

int main() 
{
    // Get the size of the graph
    // دریافت اندازه گراف
    int vertices;
    std::cout << "Enter the number of vertices: ";
    std::cin >> vertices;

    // Get the adjacency matrix
    // دریافت ماتریس مجاورت
    std::vector<std::vector<int>> adjacencyMatrix(vertices, std::vector<int>(vertices, 0));
    std::cout << "Enter the adjacency matrix:" << std::endl;
    for (int i = 0; i < vertices; i++) 
    {
        for (int j = 0; j < vertices; j++) 
        {
            std::cout << "Enter the value for adjacencyMatrix[" << i << "][" << j << "]: ";
            std::cin >> adjacencyMatrix[i][j];
        }
    }

    // Create a graph object and set the adjacency matrix
    // ساختن شیء گراف و تنظیم ماتریس مجاورت
    Graph graph(vertices);
    graph.setAdjacencyMatrix(adjacencyMatrix);

    // Find connected components
    // یافتن اجزا متصل
    graph.findConnectedComponents();

    return 0;
}