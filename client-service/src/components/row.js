import React from 'react';
import { PostRow, RowText, AuthorText, DateText} from './styles';

export const Row = ({ title, author, date_time }) => (
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
)