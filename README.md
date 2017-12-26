# closure

When a function(iF) is declared inside other function (oF), even after oF execution stack is poped of memory the variables it 
declared will be present there, which are later taken care JS garbage collection. Now if we invoke this iF it still has access 
to oF variables as it is the outer env. This gives a feeling of closed group - closures
