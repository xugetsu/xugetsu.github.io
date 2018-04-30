import React from 'react';
import CommitStyles from './Commit.css';
import BranchStyles from './Branch.css';
import newbranch from '../../../Assets/Icons/svgs/branch.svg';

const commit = (props) =>{
    const width = props.commit.w*props.width + 'px';
    const color = props.commit.y ? (commit.y === 1 ? '#ff3c00' : '#ff5c50' ) : null;  
    const classStyle = (props.commit.i[0] === 'c') ? CommitStyles : BranchStyles;
    const newBranch = (props.commit.i[0] === 'c') ? null :
                  <img draggable = {false}  src={newbranch} width={props.width} height={60}/>;
    const inlineStyle = {borderBottomColor:color?color:'#ff7b00',width:width?width:'50px'};
    return (
        <div className= {classStyle.Commit} style={inlineStyle}>
            <span onClick = {props.clicked}>
                <div  className= {classStyle.Details} >
                    {props.commit.content}
                </div>
            </span>
            {newBranch}
        </div> );
} 
export default commit;
