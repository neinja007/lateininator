import { useState } from 'react';

export type Stage = 'settings' | 'test' | 'review' | 'results';

export const useStage = (): {
	stage: Stage;
	setStage: React.Dispatch<React.SetStateAction<Stage>>;
} => {
	const [stage, setStage] = useState<Stage>('settings');
	return { stage, setStage };
};
