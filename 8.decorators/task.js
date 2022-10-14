function cachingDecoratorNew(func) {
  let cache = [];
 function wrapper(...args){
    const hash = args.join(',');
    const objectInCache = cache.find((item) => item.hash === hash);
    if(objectInCache){
      let index = cache.findIndex((item) => item.hash === hash);
      console.log("Из кэша: " + cache[index].value);
      return "Из кэша: " + cache[index].value;
    }
    let result = func(...args);
    cache.push({hash: hash, value: result});
    if(cache.length > 5){
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
  }
  return wrapper;
}


function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;
  let isThrottled = true;
  function wrapper(...args){
    wrapper.allCount += 1;
    if(isThrottled){
      wrapper.count += 1;
      func(...args);
      isThrottled = false;
    }
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      wrapper.count += 1;
      func(...args);
    }, delay);
  }
  return wrapper;
}