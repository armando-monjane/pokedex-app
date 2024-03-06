import { NavigateOptions, useNavigate } from 'react-router-dom';

export const useCustomNavigate = () => {
    const navigate = useNavigate();

    const goToPage = (path: string, options?: NavigateOptions) => {
        if (options) {
            navigate(path, options);
            return;
        }
        navigate(path);
    };

    const goBack = () => {
        navigate(-1);
    }

    return { goToPage, goBack };
};
