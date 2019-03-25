#include <iostream>
#include <fstream>
#include <stdio.h>
using namespace std;

//Class Definition
template<typename DataType>
class Node {
public:
    Node(DataType d = "");
    DataType getData();
    Node* getLeft();
    Node* getRight();
    void setData(DataType d);
    void setLeft(Node* n);
    void setRight(Node* n);
private:
    DataType data;
    Node* left;
    Node* right;
};

//Member Functions
template<typename DataType>
Node<DataType>::Node(DataType d) {
    data = d;
    left = nullptr;
    right = nullptr;
}

template<typename DataType>
DataType Node<DataType>::getData() {
    return data;
}

template<typename DataType>
Node<DataType>* Node<DataType>::getLeft() {
    return left;
}

template<typename DataType>
Node<DataType>* Node<DataType>::getRight() {
    return right;
}

template<typename DataType>
void Node<DataType>::setData(DataType d) {
    data = d;
}

template<typename DataType>
void Node<DataType>::setLeft(Node* l) {
    left = l;
}

template<typename DataType>
void Node<DataType>::setRight(Node* r) {
    right = r;
}

//Non-Member Functions
//inserts a node into the tree, assuming the tree already has an initial (dummy or regular) node
template<typename DataType>
void insertNode(Node<DataType>* root, DataType d) {
    if(root == nullptr) {
        root = new Node<DataType>(d);
        return;
    }
    
    if(root->getData() >= d) { //insert to the left side
        if(root->getLeft() == nullptr) {
            root->setLeft(new Node<DataType>(d));
            return;
        }
        else {
            insertNode(root->getLeft(), d);
        }
    }
    else { //insert to the right side
        if(root->getRight() == nullptr) {
            root->setRight(new Node<DataType>(d));
            return;
        }
        else {
            insertNode(root->getRight(), d);
        }
    }
}

//transfers the data from the tree to a file
template<typename DataType>
void transferTree(Node<DataType>* root, fstream& file) {
    if(root == nullptr)
        return;
    
    //in-order transfer
    transferTree(root->getLeft(), file);
    file << root->getData() << endl;
    transferTree(root->getRight(), file);
}

//prints the data of the tree
template<typename DataType>
void inOrderTraversal(Node<DataType>* root) {
    if(root == nullptr)
        return;
    inOrderTraversal(root->getLeft());
    cout << root->getData() << endl;
    inOrderTraversal(root->getRight());
}
