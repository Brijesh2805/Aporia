#CSS patterns

## Spacing between items(NavBar)
**Goal:-** How to give spacing between navar items or links ?
**Technique:-** 1. First display the items using flex (flex set items in a row by default but we can set in column too) ;
 2. to allign items horizontally use (Justify-content) and for vertically(allign-items) ;
 3. these two techniques give spacing equally to every item (but if we want different items get different spacing we need to wrap them either in a div or give them unique id) ;
 4. Then we can apply justify-content on divs and For spacing between inside the items of div we use margin and padding 

 **Key-Values:-**
 display : flex; //By default in row 
 justify-content : value; //align -horizontally
 align-items: value; //align-vertically
 gap : value; // space between items;
 margin: value; // 2 element ke border ke bich ki spacing
 padding: value; // element or content ke bich ki spacing

