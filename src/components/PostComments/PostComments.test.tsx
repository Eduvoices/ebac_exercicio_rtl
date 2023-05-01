import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('Deve comentar Legal no post', () => {
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('text-area'), {
            target: {
                value: 'Legal'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        expect(screen.getByText('Legal')).toBeInTheDocument()
    });
    test('Deve comentar Maneiro no post', () => {
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('text-area'), {
            target: {
                value: 'Maneiro'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        expect(screen.getByText('Maneiro')).toBeInTheDocument()
    })
});