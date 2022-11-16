class Node
    {
        constructor(x) {
            this.data = x;
            this.left = null;
            this.right = null;
          }
    }    
    let root;

    function sum(node)
    {
        if(node == null)
        {
            return 0;
        }
        return (sum(node.left) + node.data+sum(node.right));
    }
     
    function isSumTree(node)
    {
        let ls,rs;

        if(node == null || (node.left == null && node.right == null))
        {
            return 1;
        }

        ls = sum(node.left);
        rs = sum(node.right);

        if((node.data == ls + rs) && isSumTree(node.left) != 0 && isSumTree(node.right) != 0)
        {
            return 1;
        }
        return 0;
    }
     
 
    // const prompt = require("prompt-sync")();
    // var a,b,c,d,e,f ;
    // a = prompt("Enter Root ")
    // b = prompt("Enter Root left")
    // c = prompt("Enter Root right")
    // d = prompt("Enter Root left-left")
    // e = prompt("Enter Root left-right")
    // f = prompt("Enter Root right-Right")
    

    // Driver code
    root = new Node(26)
    root.left= new Node(10)
    root.right = new Node(3)
    root.left.left = new Node(4)
    root.left.right = new Node(6)
    root.right.right = new Node(4)
     
    if(isSumTree(root) != 0)
    {
        console.log("1");     
    }
    else
    {
        console.log("0");
    }

