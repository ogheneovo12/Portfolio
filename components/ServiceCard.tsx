import Link from 'next/link';
import React from 'react';
import { HiArrowRight } from 'react-icons/hi';

export interface IServiceCardProps {
    title: string;
    description?: string;
    actionText?: string;
    actionLink?: string;
}

function ServiceCard({ title, description, actionLink, actionText = 'Lets work together' }: IServiceCardProps) {
    return (
        <div className="min-h-[337px] p-[22px] bg-service text-white">
            <h3 className="text-2xl text-white font-semibold">{title}</h3>
            <p className="text-light text-base my-[45px]">{description}</p>
            <Link className="font-semibold text-base" href={actionLink || '#'}>
                <a className="flex items-center">
                    {actionText}
                    <HiArrowRight className="ml-2" />
                </a>
            </Link>
        </div>
    );
}

ServiceCard.propTypes = {};

export default ServiceCard;
