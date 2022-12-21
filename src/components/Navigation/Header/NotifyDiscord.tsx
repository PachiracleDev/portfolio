import { useTranslation } from 'next-i18next'

export default function NotifyDiscord() {
    const { t } = useTranslation('common')

    return (
        <div className="text-xs font-bold rounded-md text-white bg-black p-2">
            {t('copied')}
        </div>
    )
}
