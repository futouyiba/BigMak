// Fill out your copyright notice in the Description page of Project Settings.


#include "MyClass.h"

MyClass::MyClass()
{
}

MyClass::~MyClass()
{
}

UENUM(BlueprintType)
enum class EStat:uint8
{
    Health,
    Damage,
    MoveSpeed,
    AttackSpeed,
    Range,
    HealthRegeneration,
    Mana,
    AmmoInClip,
    AmmoTotal,
    ManaRegeneration,
    Cooldown,
    DamageBonus,
    Recoil,
    DamageTaken,
    Stack,
    Recast,
    Mastery,
    Firerate,
    MaxChargeTime,
    Duration,
    MaxHitResult,
    Level,
    Experience,
};

UENUM(BlueprintType)
enum class ETeam:uint8
{
    None,
    Red,
    Blue,
    Black,
    White,
};

UENUM(BlueprintType)
enum class  ESkillCategory:uint8
{
    Active,
    Passive,
};

UENUM(BlueprintType)
enum class  ENotifyEvent :uint8{ Start, FirstEffect, SecondEffect, End, StartCharging };



UENUM(BlueprintType)
enum class  EStatusStackType:uint8
{
    ResetsDuration,
    AddsDuration,
    Both,
    None
};

UENUM(BlueprintType)
enum class  EStatusType:uint8
{
    Bonus,
    Malus
};

UENUM(BlueprintType)
enum class  EStatCarrier:uint8
{
    Skill,
    Character,
    Weapon
};

USTRUCT()
struct FCost
{
    GENERATED_BODY()

    UPROPERTY()
    EStat TargetStat;

    UPROPERTY()
    float Amount;
};

USTRUCT()
struct FRepStat
{
    GENERATED_BODY()

    UPROPERTY()
    EStat Stat;

    UPROPERTY()
    float MaxValue;

    UPROPERTY()
    float SpentValue;
};


UENUM(BlueprintType)
enum class EAction:uint8
{
    None,
    Jump,
    PrimarySkill,
    Reload,
    Sprint,
    Move,
    PrimaryFire,
    SecondaryFire,
    SecondarySkill,
    ThirdSkill,
    Interact,
    ThrowWeapon,
    FourthSkill,
    SwitchTeam,
    SwitchCharacter,
    CancelMove,
    Zoom,
    ToggleMenu,
};

UENUM(BlueprintType)
enum class EAIState:uint8
{
    Idle,
    Seeking,
    Attacking,
    Stunned,
};

UENUM(BlueprintType)
enum class EAnimationState:uint8
{
    Idle,
    Defensive,
    Offensive,
    Dead,
    Charging,
    Stunned,
    Channeling,
};

UENUM(BlueprintType)
enum class ECustomSkillInfo:uint8 { CriticalRoll, YourCustomValue };

UENUM(BlueprintType)
enum class EActionTrigger:uint8
{
    Start,
    Stop,
    Cancel,
};

USTRUCT()
struct FSAction
{
    GENERATED_BODY()
public:
    UPROPERTY()
    FText Name;

    UPROPERTY()
    EAction Action;

    UPROPERTY()
    TArray<EAction> Prevents;

    UPROPERTY()
    TArray<EAction> Cancels;

    UPROPERTY()
    FString Inputs;
};

USTRUCT()
struct FSInput
{
    GENERATED_BODY()
public:
    UPROPERTY()
    EAction Action;

    UPROPERTY()
    FText ComputerShortcut;

    UPROPERTY()
    FText GamepadShortcut;
};

UENUM()
enum class EAttackingState:uint8
{
    MoveThenAttack, MoveAndAttack, Attack
};

UENUM()
enum class EIdleState { Wander, Patrol, Guard, Follow };

UCLASS()
class UAN_SkillEvent : public UAnimNotify
{
    GENERATED_BODY()
public:
    ENotifyEvent EventType;

    // still thinking whether to modify it in TS or CPP...
};

// UINTERFACE()
// class UAbilitySystemInterface : public UInterface
// {
//     GENERATED_UINTERFACE_BODY()
// };
//
// class MCE_API IAbilitySystemInterface
// {
//     GENERATED_IINTERFACE_BODY()
//
//     virtual void SetAnimationState() const = 0;
// };

    











/**
 * ==================================================================================================================
 * Write definitions before this
 * and dummy after this.
 * ==================================================================================================================
 */


UCLASS()
class UDummy : public UObject
{
    GENERATED_BODY()
public:
    UPROPERTY()
    FRepStat RepStat;

    UPROPERTY()
    FCost Cost;

    UPROPERTY()
    EStatCarrier Carrier;

    UPROPERTY()
    EStatusType StatusType;

    UPROPERTY()
    EStatusStackType StatusStackType;

    UPROPERTY()
    EAction Action;

    UPROPERTY()
    EAIState AIState;

    UPROPERTY()
    EAnimationState AnimationState;

    UPROPERTY()
    ECustomSkillInfo CustomSkillInfo;

    UPROPERTY()
    EActionTrigger ActionTrigger;

    UPROPERTY()
    FSAction SAction;
    
    UPROPERTY()
    FSInput SInput;
    
    UPROPERTY()
    EAttackingState AttackingState;

    UPROPERTY()
    EIdleState IdleState;

    UPROPERTY()
    UAN_SkillEvent* Uan_SkillEvent;
};