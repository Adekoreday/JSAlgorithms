function StringSearch(element, value) {
    const valueArray = element.split('');
    const expectedStringArray = value.split('');
    let count  = 0;
    let ismatched = true;
    let lengthOfexpectedArray = expectedStringArray.length;
     valueArray.forEach(e  => {
     if(e === expectedStringArray[0]){
       var indexOfelement = valueArray.indexOf(e);
      for(i =0; i< lengthOfexpectedArray; i++){
        if(valueArray[indexOfelement] !== expectedStringArray[i]){
          ismatched = false;
          break; 
        }
  
        ++indexOfelement;
      }
  
      if(ismatched === true) {
        ++count
      }
     }
     })
    
    return count;
  };
  
  const count = StringSearch('greatgreat', 'great');
  console.log(count, '>>>>>>our count<<<<<<');