import React from "react";

export default function GroupBY(data){
    
    const groupByCategory = data.reduce((group, item) => {
        const { Category } = item;
        group[Category] = group[Category] ?? [];
        group[Category].push({...item});
        return group;
      }, {});
      
    let categoryList = Object.keys(groupByCategory);
      return[groupByCategory , categoryList]
}