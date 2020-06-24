const INITIAL_STATE = {
    sections: [
      {
        title: "Obras en ejecución",
        imageUrl: "",
        id: 1,
        linkUrl: "obras"
      },
      {
        title: "Asignación MO",
        imageUrl: "",
        id: 2,
        linkUrl: "asignacionmo"
      },
      {
        title: "Indicadores",
        imageUrl: "",
        id: 3,
        linkUrl: "indicadores"
      }
    ]
  };
  
  const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default directoryReducer