using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyAttack : MonoBehaviour
{
    public Animator _animator;
    public Transform attackkPoint;
    public float attackkrange = 0.2f;
    public LayerMask playerLayers;
    public float attackkRate = 2f;
    public Transform themaincharacter;
    public AudioSource deathS;
    public AudioSource BiteS;

    float NextAttackkTime = 0f;
    float dist;
    void Example()
    {
        if (themaincharacter)
        {
            
            dist = Vector3.Distance(themaincharacter.position, transform.position);
            
        }
    }



    // Update is called once per frame
    void Update()
    {
        if (Time.time >= NextAttackkTime)
        {
            if (dist <= attackkrange)
            { 
                attackking();
                NextAttackkTime = Time.time + 1f / attackkRate;
            }
        }

    }

    void attackking()
    {
        // play an attaack animation
        _animator.SetTrigger("attackk");

        //detect player in range of attack
        Collider[] hitplayer = Physics.OverlapSphere(attackkPoint.position, attackkrange, playerLayers);

        //damage player
        foreach (Collider player1 in hitplayer)
        {
            BiteS.enabled = false;
            deathS.enabled = false;
            player1.GetComponent<player>().TakkeDamage(100);
            BiteS.enabled = true;
            deathS.enabled = true;
        }
    }
    private void OnDrawGizmosSelected()
    {
        if (attackkPoint == null)
            return;

        Gizmos.DrawWireSphere(attackkPoint.position, attackkrange);
    }

}
