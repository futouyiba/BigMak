// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "GameplayTagContainer.h"
#include "Sound/SoundCue.h"
#include "MyClass.generated.h"

/**
 * 
 */
class BIGMAK_API MyClass
{
public:
	MyClass();
	~MyClass();
};

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
    FireRate,
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

USTRUCT(BlueprintType)
struct FCost
{
    GENERATED_BODY()

    UPROPERTY()
    EStat TargetStat;

    UPROPERTY()
    float Amount;
};

USTRUCT(BlueprintType)
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

USTRUCT(BlueprintType)
struct FInput
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

UENUM(BlueprintType)
enum class EAttackingState:uint8
{
    MoveThenAttack, MoveAndAttack, Attack
};

UENUM(BlueprintType)
enum class EIdleState:uint8 { Wander, Patrol, Guard, Follow };

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

// from here, enums and structs are not added to dummy class.
    
USTRUCT(BlueprintType)
struct FTeam
{
    GENERATED_BODY()

    UPROPERTY()
    FText TeamName;
    UPROPERTY()
    ETeam Team;
    UPROPERTY()
    FLinearColor TeamColor;
    UPROPERTY()
    TArray<ETeam> Allies;
    UPROPERTY()
    TArray<ETeam> Enemies;
    UPROPERTY()
    TArray<ETeam> Neutral;
};

USTRUCT(BlueprintType)
struct FAction
{
    GENERATED_BODY()
    
    UPROPERTY(BlueprintReadWrite, EditAnywhere)
    FText Name;
    UPROPERTY(BlueprintReadWrite,EditAnywhere)
    EAction Action;
    UPROPERTY(BlueprintReadWrite,EditAnywhere)
    TArray<EAction> Prevents;
    UPROPERTY(BlueprintReadWrite, EditAnywhere)
    TArray<EAction> Cancels;
    UPROPERTY(BlueprintReadWrite, EditAnywhere)
    FString Inputs;
};

USTRUCT(BlueprintType)
struct FVSFX
{
    GENERATED_BODY()
    
    UPROPERTY(BlueprintReadWrite, EditAnywhere)
    UParticleSystem* VFX;
    UPROPERTY(BlueprintReadWrite,EditAnywhere)
    USoundCue* SFX;
};

UENUM(BlueprintType)
enum class EValueModifierType:uint8
{
    Flat,
    Ratio,
    Expired // expired stands with flat and ratio on purpose. this is by design.
};

USTRUCT()
struct FStatModifier
{
    GENERATED_BODY()
    
    UPROPERTY()
    EValueModifierType ValueModifier;
    UPROPERTY()
    float Value;
    UPROPERTY()
    FGameplayTagContainer Tags;
    UPROPERTY()
    EStatusType Type;
};

// USTRUCT()
// struct FDamageResult
// {
//     GENERATED_BODY()
//     
//     UPROPERTY()
//     float Amount;
//     UPROPERTY()
//     FGameplayTagContainer Tags;
//     UPROPERTY()
//     FHitResult HitResult;
//     UPROPERTY()
//     AActor* Source;
//     UPROPERTY()
//     float ExtraMultiplier;
// };

/** Interface for actors that expose access to an skill manager component */
// UINTERFACE(MinimalAPI)
// class USkillInterface : public UInterface
// {
//     GENERATED_UINTERFACE_BODY()
// };
//
// // class BIGMAK_API ISkillInterface
// class  ISkillInterface
// {
//      GENERATED_IINTERFACE_BODY()
// //
// //     /** Returns the ability system component to use for this actor. It may live on another actor, such as a Pawn using the PlayerState's component */
// //     virtual UObject* GetAbilitySystemComponent() const = 0;
// };

/**
 * ==================================================================================================================
 * Write definitions before this
 * and dummy after this.
 * ==================================================================================================================
 */

// Include enums and useful structs within this dummy class, so that typescript can generate d.ts information.
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
    FAction SAction;
    
    UPROPERTY()
    FInput SInput;
    
    UPROPERTY()
    EAttackingState AttackingState;

    UPROPERTY()
    EIdleState IdleState;

    UPROPERTY()
    UAN_SkillEvent* Uan_SkillEvent;

    UPROPERTY()
    FStatModifier StatModifier;

    UPROPERTY()
    FVSFX VSFX;

    UPROPERTY()
    FTeam Team;
    
    UPROPERTY()
    EStat Stat;
};