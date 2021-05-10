import React, { useState, useContext } from 'react';
import { Anchor, 
         PostRow, 
         RowText, 
         AuthorText, 
         DateText,
         DeleteIcon} from './styles';
import { AppContext } from './AppContext'

export const Row = ({ title, url, author, date_time, id }) => {
    const [hoverState, setHoverState] = useState(false)
    const [inTrash, setInTrash] = useState(false)
    const [deleted, setDeleted] = useState(false)
    const myContext = useContext(AppContext)
    if (deleted) {
        return (
            <></>
        )
    }

    return (
    <Anchor 
        href={ (!inTrash && url) || "javascript:void(0)" } 
        onMouseEnter = { () => setHoverState(true) }
        onMouseLeave = { () => setHoverState(false) }   
        >
        <PostRow>
            <RowText>
                { title }
                
                <AuthorText>
                    { author }
                </AuthorText>
            </RowText>

            <RowText>
                <DateText>
                    { date_time }
                </DateText>
                { hoverState && (
                    <DeleteIcon 
                        onMouseEnter= {() => setInTrash(true)}
                        onMouseLeave = { () => setInTrash(false) }
                        onClick={ ()=> {
                        // eslint-disable-next-line no-restricted-globals
                        const result = confirm("Want to delete ?");
                        if (result) {
                                myContext.add_deleted(myContext.deleted_posts, id);
                                setDeleted(true);
                            }
                        } }>
                        <img src="/trash.png"  alt="D" width="14" height="14"/>
                    </DeleteIcon>
                ) }              
            </RowText>
        </PostRow>
    </Anchor>
    
)}