import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'dashboard',
  initialState: {
    categories: [],
    selectedOption: "Normal Mode",
    isModalOpen: false,
    activeCategoryId: null,
    globalSearch: '',
    latestWidgetId: 'w8',
    isKebabMenuBoxOpen: false,
    isChatBoxOpen: false,
  },
  reducers: {
    initialize(state, action){
      const data = action.payload;
      state.categories = data.categories.map(c=>({
        ...c,
        widgets: c.widgets.map(w=>({ ...w, active: (w.active ? true : false) }))
      }));
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setSelectedOption: (state, action) => {
      state.selectedOption = action.payload;
    },
    setModalOpen(state, action){
      state.isModalOpen = action.payload.open;
    },
    setActiveCategory(state, action){
      state.activeCategoryId = action.payload;
    },
    addWidgets(state, action){
      const { categoryId, widgetIds } = action.payload;
      const cat = state.categories.find(c=>c.id===categoryId);
      if(!cat) return;
      cat.widgets.forEach(w=>{
        if(widgetIds.includes(w.id)){ w.active = true; }
      });
    },
    removeWidget(state, action){
      const { categoryId, widgetId } = action.payload;
      const cat = state.categories.find(c=>c.id===categoryId);
      if(!cat) return;
      const w = cat.widgets.find(x=>x.id===widgetId);
      if(w) w.active = false;
    },
    setGlobalSearch(state, action){
      state.globalSearch = action.payload;
    },
    setLatestWidgetId(state, action){
      state.latestWidgetId = action.payload;
    },
    setKebabMenuBoxState(state, action) {
      state.isKebabMenuBoxOpen = action.payload;
    },
    setChatBoxState(state, action) {
      state.isChatBoxOpen = action.payload;
    },
  }
});

export const { initialize, setCategories, setLatestWidgetId, setSelectedOption, setModalOpen, addWidgets, removeWidget, setActiveCategory, setGlobalSearch, setKebabMenuBoxState, setChatBoxState } = slice.actions;
export default slice.reducer;
