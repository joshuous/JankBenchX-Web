import React from 'react';
import { ResultAll } from '../../types';
import { faunaTimestampToDate, formatDateTime } from '../../utils/datetime';

export const DeviceCard: React.FC<{ deviceDetails: ResultAll }> = ({
  deviceDetails,
}) => {
  const {
    _id,
    _ts,
    device_name,
    device_model,
    device_board,
    device_hardware,
    android_version,
    kernel_version,
    fingerprint,
    build_type,
    build_time,
  } = deviceDetails;

  const date = faunaTimestampToDate(_ts);

  return (
    <div className="bg-white">
      <div className="flex flex-row justify-between px-4 py-2 bg-gray-900 text-gray-100">
        <div className="text-sm">{`ID: ${_id}`}</div>
        <div className="text-sm">
          {`${formatDateTime(
            date
          )} - ${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`}
        </div>
      </div>
      <div className="device-card__body">
        <div className="flex flex-row flex-wrap justify-around p-4 text-center">
          <div className="flex flex-col px-4 py-2">
            <div className="text-sm">Name</div>
            <div className="text-lg">{device_name}</div>
          </div>
          <div className="flex flex-col px-4 py-2">
            <div className="text-sm">Model</div>
            <div className="text-lg">{device_model}</div>
          </div>
          <div className="flex flex-col px-4 py-2">
            <div className="text-sm">Board</div>
            <div className="text-lg">{device_board}</div>
          </div>
          <div className="flex flex-col px-4 py-2">
            <div className="text-sm">Hardware</div>
            <div className="text-lg">{device_hardware}</div>
          </div>
          <div className="flex flex-col px-4 py-2">
            <div className="text-sm">Android</div>
            <div className="text-lg">{android_version}</div>
          </div>
        </div>
        <div className="flex flex-col px-4">
          <div className="flex flex-col py-2">
            <div className="font-bold text-sm">Kernel Version</div>
            <div className="text-sm">{kernel_version}</div>
          </div>
          <div className="flex flex-col py-2">
            <div className="font-bold text-sm">Fingerprint</div>
            <div className="text-sm">{fingerprint}</div>
          </div>
          <div className="flex flex-col py-2">
            <div className="font-bold text-sm">Build Type</div>
            <div className="text-sm">{build_type}</div>
          </div>
          <div className="flex flex-col py-2">
            <div className="font-bold text-sm">Build Time</div>
            <div className="text-sm">{build_time}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
