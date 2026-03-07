import Map "mo:core/Map";
import Time "mo:core/Time";

module {
  type OldUserProfile = {
    principal : Principal;
    pvName : Text;
    registeredAt : Time.Time;
    waehrung : Text;
  };

  type OldActor = {
    users : Map.Map<Principal, OldUserProfile>;
  };

  type NewUserProfile = {
    principal : Principal;
    pvName : Text;
    registeredAt : Time.Time;
    waehrung : Text;
    co2Faktor : Float;
  };

  type NewActor = {
    users : Map.Map<Principal, NewUserProfile>;
  };

  public func run(old : OldActor) : NewActor {
    let newUsers = old.users.map<Principal, OldUserProfile, NewUserProfile>(
      func(_principal, oldProfile) {
        {
          oldProfile with
          co2Faktor = 0.128;
        };
      }
    );
    { users = newUsers };
  };
};
