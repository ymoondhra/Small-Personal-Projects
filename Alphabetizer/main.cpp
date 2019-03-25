#include <iostream>
#include <fstream>
#include <stdio.h>
#include "tree.h"
using namespace std;

int main(int argc, const char * argv[]) {
    //[1]: Fetch The File
    ifstream inFile;
    inFile.open("/Users/ymoondhra/Desktop/UCLA/Personal-Coding-Projects/Cool Practice/Alphabetizer/Alphabetizer/input.txt");
    if(!inFile) {
        cerr << "Unable to open file.";
        exit(1);
    }
    
    //[2]: Put Data Into Structure (Binary Tree)
    string input1, input2;
    Node<string>* root = new Node<string>("");
    while (inFile >> input1 >> input2) {
        string input = input1 + " " + input2;
        insertNode(root, input);
    }
    inFile.close();

    //[3]: Create The New File
        //deleting the existing file
    if( remove( "/Users/ymoondhra/Desktop/UCLA/Personal-Coding-Projects/Cool Practice/Alphabetizer/Alphabetizer/output.txt" ) != 0 )
        cerr <<  "Error deleting file" << endl;
    
        //creating the new file (output)
    fstream output;
    output.open("/Users/ymoondhra/Desktop/UCLA/Personal-Coding-Projects/Cool Practice/Alphabetizer/Alphabetizer/output.txt",ios::out|ios::in|ios::app);
    
    //[4]: Transfer Tree to Document
    transferTree(root, output);
    output.close();
    
    //[5]: Testing
    inOrderTraversal(root); //should print names in alphabetic order
    
}

//started at 11:15 AM
//finished base code at 1:00 PM
//finished debugging at 1:45 PM
//finished improvements (i.e. template class) and comments at 2:30 PM

