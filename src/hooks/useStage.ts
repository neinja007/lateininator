import { useState } from 'react';

export const useStage = (): {
	stage: 'settings' | 'test' | 'review' | 'results';
	setStage: React.Dispatch<React.SetStateAction<'settings' | 'test' | 'review' | 'results'>>;
} => {
	const [stage, setStage] = useState<'settings' | 'test' | 'review' | 'results'>('settings');
	return { stage, setStage };
};
