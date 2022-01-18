import React, { useState, useEffect } from "react";
export default class Loader extends React.Component{
 
 render(){
    return(
    <div className="spinner-border text-primary" role="status" style={{margin:'auto'}}>
		<span className="sr-only">Loading...</span>
	</div>
    )	 
 }	
}
