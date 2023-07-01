import { Board } from 'components/Board/Board/Board';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchBoard } from 'services/board-servises';

export const ScreenPage = () => {
  const { boardId } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    if (boardId) {
      dispatch(fetchBoard({ boardId }));
    }
  }, [boardId, dispatch]);
  return (
    <>
      <Board />
    </>
  );
};
