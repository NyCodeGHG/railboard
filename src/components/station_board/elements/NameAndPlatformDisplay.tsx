import { StationBoardTrain } from "../../../server/trpc/router/vendo";
import clsx from "clsx";

export type NameDisplayProps = {
  trainData: StationBoardTrain;
};

export default function NameAndPlatformDisplay(
  props: NameDisplayProps
): JSX.Element {
  const scheduledPlatform = props.trainData.scheduledPlatform;
  const platform = props.trainData.platform;

  const isDifferentPlatform =
    scheduledPlatform != null
      ? platform != null
        ? scheduledPlatform !== platform
        : undefined
      : undefined;

  return (
    <div className={"relative flex h-full w-full flex-row align-middle"}>
      <div className="my-auto text-lg font-semibold">
        {props.trainData.name}
      </div>
      {props.trainData.scheduledPlatform != null && (
        <div className={"absolute right-0 flex flex-row"}>
          <p className={"m-auto"}>Pl.</p>
          <div
            className={clsx(
              "my-auto pl-1",
              isDifferentPlatform === true && "text-red-500 line-through"
            )}
          >
            {props.trainData.scheduledPlatform}
          </div>
          {isDifferentPlatform === true && (
            <>
              <div className={"my-auto pl-1"}>{props.trainData.platform}</div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
