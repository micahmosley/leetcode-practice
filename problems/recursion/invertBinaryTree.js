


const invert=(root)=>{
    
    reverseNodes=(node)=>{
        if (!node){
            return
        }
        
        reverseNodes(node.left);
        reverseNodes(node.right);
        
        let storage=node.left 
        node.left=node.right 
        node.right=storage
    }
    
    reverseNodes(root)
    
    return root
}