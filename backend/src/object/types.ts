export enum ObjectCondition {
    SOUND = "исправное состояние", // No damages or defects detected that can deteriorate the load-carrying capacity and overall condition of the building
    FUNCTIONAL = "работоспособное состояние", // The building may have some deviations from norms, but they do not lower its functionality under real operational conditions
    LIMITED_FUNCTIONALITY = "ограниченно-работоспособное состояние", // The building has technical and operational defects that decrease its functionality, but there are no risks of its destruction
    PREEMERGENCY = "предаварийное недопустимое состояние", // The building's characteristics are deteriorated to a critical state, and the presence of people and equipment inside it poses a risk without the reinforcement of load-bearing elements
    EMERGENCY = "аварийное состояние", // The building has serious damages that require immediate elimination through major repairs. Its operation is impossible without repair measures
}
