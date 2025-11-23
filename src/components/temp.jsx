  // when no dependency array is there then it will run after every re-render of this componenet.
  useEffect(() => {
    fetchData();
  });

  /*
  when empty dependency array is there then it will run once after the first render of this component not on every re-render.

  useEffect(() => {
    fetchData();
    }, []);
    
  when something is there in dependency array then it will run only after that state variable render not on every render only after the searchText state variable changes here.
  
  useEffect(() => {
    fetchData();
  }, [searchText]);
*/