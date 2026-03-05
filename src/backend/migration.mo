import Map "mo:core/Map";
import Text "mo:core/Text";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";

module {
  type UserProfile = {
    principal : Principal;
    pvName : Text;
    registeredAt : Time.Time;
  };

  module PVSession {
    public type ID = Text;

    public type PVSession = {
      id : Text;
      name : Text;
      timestamp : Time.Time;
      data : Text;
      owner : Principal;
    };

    public module ID {
      public func toText(id : ID) : Text {
        id;
      };

      public func compare(id1 : ID, id2 : ID) : Order.Order {
        Text.compare(id1, id2);
      };
    };
  };

  module WattpilotSession {
    public type ID = Text;

    public type WattpilotSession = {
      id : Text;
      name : Text;
      timestamp : Time.Time;
      data : Text;
      owner : Principal;
    };

    public module ID {
      public func toText(id : ID) : Text {
        id;
      };

      public func compare(id1 : ID, id2 : ID) : Order.Order {
        Text.compare(id1, id2);
      };
    };
  };

  module AnalyticsResult {
    public type ID = Text;

    public type AnalyticsResult = {
      id : Text;
      timestamp : Time.Time;
      autarkyRate : Float;
      selfConsumptionRate : Float;
      pvShareOfEVCharging : Float;
      totalPVGeneration : Float;
      totalGridDraw : Float;
      totalGridFeedIn : Float;
      totalEVCharging : Float;
      owner : Principal;
    };

    public module ID {
      public func toText(id : ID) : Text {
        id;
      };

      public func compare(id1 : ID, id2 : ID) : Order.Order {
        Text.compare(id1, id2);
      };
    };
  };

  // New types for Tariff Periods
  type TarifStufe = {
    id : Text;
    preis : Float;
    farbe : Text;
  };

  type TarifPeriode = {
    id : Text;
    von : Text;
    bis : Text;
    stufen : [TarifStufe];
    zuordnungBezug : [[Text]];
    zuordnungEinspeisung : [[Text]];
    owner : Principal;
  };

  type OldActor = {
    users : Map.Map<Principal, UserProfile>;
    pvSessions : Map.Map<PVSession.ID, PVSession.PVSession>;
    wattpilotSessions : Map.Map<WattpilotSession.ID, WattpilotSession.WattpilotSession>;
    analyticsResults : Map.Map<AnalyticsResult.ID, AnalyticsResult.AnalyticsResult>;
  };

  type NewActor = {
    users : Map.Map<Principal, UserProfile>;
    pvSessions : Map.Map<PVSession.ID, PVSession.PVSession>;
    wattpilotSessions : Map.Map<WattpilotSession.ID, WattpilotSession.WattpilotSession>;
    analyticsResults : Map.Map<AnalyticsResult.ID, AnalyticsResult.AnalyticsResult>;
    tarifPerioden : Map.Map<Text, TarifPeriode>;
  };

  public func run(old : OldActor) : NewActor {
    let tarifPerioden = Map.empty<Text, TarifPeriode>();
    { old with tarifPerioden };
  };
};
