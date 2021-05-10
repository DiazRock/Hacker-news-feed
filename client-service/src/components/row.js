import React from 'react';
import { Anchor, PostRow, RowText, AuthorText, DateText} from './styles';

export const Row = ({ title, url, author, date_time }) => (
    <Anchor href={ url }>
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
            </RowText>
        
        </PostRow>
    </Anchor>
    
)